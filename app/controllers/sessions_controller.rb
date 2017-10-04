class SessionsController < ApplicationController
  include SessionsHelper

  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      render json: {a: 'hi', text: user.access_token, status: 200}
    else
      render json: {error: "Email and password combination are invalid", status: 422}
    end
  end

  def verify_access_token
    user = User.find_by(access_token: params[:session][:access_token])
    if user
      render text: "verified", status: 200
    else
      render text: "Token failed verification", status: 422
    end
  end

end
