require 'rails_helper'

RSpec.describe "Routing to users", :type => :routing do
  it "routes GET /users to users#index" do
    expect(:get => "/users").to route_to("users#index")
  end

  it "routes GET /users/:id to users#show" do
    expect(:get => "/users/1").to route_to("users#show", :id => "1")
  end

  it "routes POST /users to users#create" do
    expect(:post => "/users").to route_to("users#create")
  end

  it "routes DELETE /users/1 to users#destroy" do
    expect(:delete => "/users/1").to route_to("users#destroy", :id => "1")
  end  
end