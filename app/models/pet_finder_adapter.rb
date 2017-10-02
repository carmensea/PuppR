require 'httparty'

class PetFinderAdapter < ApplicationRecord
  include HTTParty
  base_uri ENV['PETFINDER_URL']
  format :json

  def initialize
    @api_key = ENV["PETFINDER_KEY"]
    @animal = "dog"
  end

  def custom_search(params)
    #size = params['size']
    #location = params['location']
    @response = HTTParty.get("#{ENV['PETFINDER_URL']}/pet.find?",
                             { query:
                               {"key" => "#{@api_key}",
                                "animal" => "#{@animal}",
                                "location" => "#{params['location']}",
                                "age" => "#{params['age']}",
                                "size" => "#{params['size']}",
                                "sex" => "#{params['sex']}",
                                "format" => "json"
                                }
    })
    parse_data(@response["petfinder"])
  end


  private

    def creation_details(hash)
      shelter = shelter_exist?(hash)
      if shelter.blank?
        location = "#{hash["address"]} " + "#{hash["city"]}, " + "#{hash["state"]} "
        + "#{hash[:zip]}"
        shelter = Shelter.create(shelter_id: hash["shelter_id"], phone: hash["phone"], address: location)
      end

      make_dog(hash, shelter)
    end

    def make_dog(hash, shelter)
      dog = {}
      dog[:name] = hash["name"]
      dog[:description] = hash["desc"]
      dog[:age] = hash["age"]
      dog[:sex] = hash["sex"]
      dog[:size] = hash["size"]
      dog[:photo] = hash["photo"] || 'https://i.pinimg.com/236x/de/6d/b7/de6db77b18d07e272d112b17f184e6d9--pug-silhouette-pug-tattoo.jpg'
      dog[:shelter_id] = shelter.id
      Dog.new(dog)
    end

    def shelter_exist?(hash)
      Shelter.find_by(shelter_id: hash["shelter_id"])
    end

    def parse_data(api_response)
      i = 0
      all_results = []
      while i < api_response["lastOffset"]["$t"].to_i
        info = api_response["pets"]["pet"][i]
        result = Hash.new
        result["name"] = info["name"]["$t"]
        result["desc"] = info["description"]["$t"]
        result["sex"] = info["sex"]["$t"]
        result["size"] = info["size"]["$t"]
        result["age"] = info["age"]["$t"]
        result["address"] = info["contact"]["address1"]["$t"]
        result["phone"] = info["contact"]["phone"]["$t"]
        result["city"] = info["contact"]["city"]["$t"]
        result["zip"] = info["contact"]["zip"]["$t"]
        result["shelter_id"] = info["shelterId"]["$t"]
        result["photo"] = info.dig("media","photos","photo",2,"$t")
        all_results << creation_details(result)
        i += 1
      end
      all_results
    end
end
