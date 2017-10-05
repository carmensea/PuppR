class UsersController < ApplicationController

  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
      if @user.save
        render json: {accessToken: @user.access_token, status: 201}
      else
        render json: {error: [@user.errors.full_messages]}, status: 422
      end
  end

  private

    def set_user
      @user = User.find_by(access_token: params[:access_token])
    end

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

end
