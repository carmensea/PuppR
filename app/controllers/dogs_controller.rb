class DogsController < ApplicationController
  def new
  end

  def create
    @dog = Dog.new(dog_details)
    @user = User.find_by(params[access_token: access_token[:access_token]])

    p params
    #this is saying if the dogs name exists and the description, its false
    if !Dog.find_by(dog_details)
      @dog.save
      Favorite.create(dog_id: @dog.id, user_id: @user.id)
    else
      p "no"
    end
  end

  def index
    @user = User.first
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
    @user = User.first
    @favorite = @user.favorites.find_by(dog_id: params[:id])
    @favorite.delete
  end

  private

    def dog_details
      params.require(:dog).permit(:size, :name, :age, :photo, :description, :sex, :shelter_id)
    end
end
