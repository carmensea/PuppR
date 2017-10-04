require 'rails_helper'

RSpec.describe Dog, type: :model do
  let(:dog) { Dog.new(name: "Fido", age: "Young", sex: "M", description: "Good little dog", size: "S", shelter_id: 1, photo: "http://www.google.com") }
  
  it "instantiates a Dog object" do           
  	expect(dog).to be_instance_of Dog    
  end    
end
