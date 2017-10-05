class DogsController < ApplicationController
  def new
  end

  def create
    @dog = Dog.new(dog_details)
    @user = User.find_by(access_token: params[:access_token])

    p params
    @favorited_dog = Dog.find_by(dog_details)
    if !@user.dogs.include?(@favorited_dog)
      @dog.save
      Favorite.create(dog_id: @dog.id, user_id: @user.id)
    else
      p "no"
    end
  end

  def index
    p params
    @user = User.find_by(access_token: params[:access_token])
    render json: @user.dogs.order('created_at DESC')
  end

  def show
    @dog = Dog.find(params[:id])
    @shelter = @dog.shelter
    dog_shelter_response = {dog: @dog,
      shelter: @shelter}
    render json: dog_shelter_response
  end

  def destroy
    p params
    @user = User.find_by(access_token: params[:access_token])
    @favorite = @user.favorites.find_by(dog_id: params[:id])
    @favorite.delete
  end

  private

    def dog_details
      params.require(:dog).permit(:size, :name, :age, :photo, :description, :sex, :shelter_id)
    end
end
