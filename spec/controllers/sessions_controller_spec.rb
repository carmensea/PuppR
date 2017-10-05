require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  describe "POST #create" do
    let(:user) {User.find_by(email: params[:session][:email].downcase)}


    context "when valid params are passed" do
      it "responds with status code 200" do
        post :create, { session: { accessToken: user.access_token } }
        expect(response).to have_http_status 200
      end  
    end

    context "when invalid params are passed" do
      
      it "responds with status code 422: Unprocessable Entity" do
        expect(response).to have_http_status 422
      end  
    end
  end
end
