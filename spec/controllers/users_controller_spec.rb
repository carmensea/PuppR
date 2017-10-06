require 'rails_helper'

RSpec.describe UsersController, type: :controller do
	let!(:user_params) { {user: { name: "Scott", email: "scott@scott.com", password: "password", password_confirmation: "password"}}}
	let!(:bad_params) { {user: { name: "Fulton", profanity: "Hot diggity dog!", password: "password", password_confirmation: "password"}}}

	describe "POST #create" do 
	  it "responds with status code 200" do
	    post :create, params: user_params, format: :json
	    expect(response).to have_http_status 200
	    expect(User.last.name).to eq('Scott')
	  end    
	
	  it "won't create a user if bad params are passed" do
	    post :create, params: bad_params, format: :json
	    expect(response).to have_http_status 422
	  end 
	end
end
