require 'rails_helper'

RSpec.describe "Routing to petfinder", :type => :routing do
  it "routes GET /petfinder/index to petfinder#index" do
    expect(:get => "/petfinder/index").to route_to("petfinder#index")
  end
end