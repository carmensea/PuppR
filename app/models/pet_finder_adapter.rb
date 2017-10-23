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
        @shelter_info = HTTParty.get("#{ENV['PETFINDER_URL']}/shelter.get",
                                 { query:
                                   {"key" => "#{@api_key}",
                                    "id" => "#{hash['shelter_id']}",
                                    "format" => "json"
                                 }
        })

        if @shelter_info['petfinder']['header']['status']['message']['$t'] == "shelter id #{hash['shelter_id']} not found"
          @shelter_info['address'] = "N/A"
          @shelter_info['city'] = "N/A"
          @shelter_info['state'] = "N/A"
          @shelter_info['zip'] = "N/A"
          @shelter_info['name'] = "N/A"
        end
        location = "#{@shelter_info['address']} " + "#{@shelter_info['city']}, " + "#{@shelter_info['state']} " + "#{@shelter_info['zip']}"
        shelter = Shelter.create(name: @shelter_info["name"], shelter_id: hash["shelter_id"], phone: @shelter_info["phone"], address: location)
      end

      make_dog(hash, shelter)
    end

    def make_dog(hash, shelter)
      dog = {}
      dog[:name] = hash["name"] || "dog has no name"
      dog[:description] = hash["desc"] || "dog has no description"
      dog[:age] = hash["age"] || "dog has no age"
      dog[:sex] = hash["sex"]  || "dog has no sex"
      dog[:size] = hash["size"]  || "dog has no size"
      dog[:photo] = hash["photo"] || 'https://i.pinimg.com/236x/de/6d/b7/de6db77b18d07e272d112b17f184e6d9--pug-silhouette-pug-tattoo.jpg'
      dog[:shelter_id] = shelter.id || "N/A"
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
