require 'rails_helper'

RSpec.describe "Routing to sessions", :type => :routing do
  it "routes POST /login to sessions#create" do
    expect(:post => "/login").to route_to("sessions#create")
  end

  it "routes DELETE /logout to sessions#delete" do
    expect(:delete => "/logout").to route_to("sessions#delete")
  end
end