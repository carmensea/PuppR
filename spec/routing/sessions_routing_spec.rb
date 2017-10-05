require 'rails_helper'

RSpec.describe "Routing to sessions", :type => :routing do
  it "routes GET /login to sessions#create" do
    expect(:get => "/login").to route_to("sessions#create")
  end
end