require 'rails_helper'

RSpec.describe Shelter, type: :model do
  let(:shelter) { Shelter.new(name: "Rainbow Bridge Pet Shelter", phone: "123-456-7890", address: "123 Main Street, San Francisco, CA, 94086", shelter_id: 1) }
  
  it "instantiates a Shelter object" do           
  	expect(shelter).to be_instance_of Shelter    
  end
end
