require 'rails_helper'

RSpec.describe Favorite, type: :model do
  let(:user) { User.create(name: "Scott", email: "scott@scott.com", password: "password") }
  let(:dog) { Dog.create(name: "Fido", age: "Young", sex: "M", description: "Good little dog", size: "S", shelter_id: 1, photo: "http://www.google.com") }
  let(:favorite) { Favorite.new(user_id: User.find_by(name: "Scott"), dog_id: Dog.find_by(name: "Fido")) }
  
  it "instantiates a Favorite object" do           
  	expect(favorite).to be_instance_of Favorite    
  end
end
