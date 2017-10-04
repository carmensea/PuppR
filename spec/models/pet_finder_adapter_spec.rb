require 'rails_helper'
require 'httparty'

RSpec.describe PetFinderAdapter, type: :model do
  let(:pet_finder_key) {ENV["PETFINDER_KEY"]}
  let(:pet_finder_url) {"http://api.petfinder.com/"}
  let(:animal) {"dog"}
  let(:pet_finder_adapter) { PetFinderAdapter.new }
  
  it "instantiates a PetFinderAdapter object" do           
  	expect(pet_finder_adapter).to be_instance_of PetFinderAdapter    
  end



end
