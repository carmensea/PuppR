require 'rails_helper'

RSpec.describe "Routing to dogs", :type => :routing do
  it "routes GET /dogs to dogs#index" do
    expect(:get => "/dogs").to route_to("dogs#index")
  end

  it "routes GET /dogs/show to dogs#show" do
    expect(:get => "/dogs/1").to route_to("dogs#show", :id => "1")
  end

  it "routes POST /dogs to dogs#create" do
    expect(:post => "/dogs").to route_to("dogs#create")
  end

  it "routes DELETE /dogs/1 to dogs#destroy" do
    expect(:delete => "/dogs/1").to route_to("dogs#destroy", :id => "1")
  end

  it "routes GET /users/:user_id/dogs to dogs#index" do
    expect(:get => "/users/1/dogs").to route_to("dogs#index", :user_id => "1")
  end

  it "routes GET /users/:user_id/dogs/show to dogs#show" do
    expect(:get => "/users/1/dogs/1").to route_to("dogs#show", :user_id => "1", :id => "1")
  end

  it "routes POST /users/:user_id/dogs to dogs#create" do
    expect(:post => "/users/1/dogs").to route_to("dogs#create", :user_id => "1")
  end

  it "routes DELETE /users/:user_id/dogs/1 to dogs#destroy" do
    expect(:delete => "/users/1/dogs/1").to route_to("dogs#destroy", :user_id => "1", :id => "1")
  end
end