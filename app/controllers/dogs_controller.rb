class DogsController < ApplicationController
  def new
  end

  def create
    @dog = Dog.new(dog_details)
    @user = User.find_by(access_token[:access_token])

    if @dog.save
      Favorite.create(dog_id: @dog.id, user_id: @user.id)
    else
      p @dog
    end
  end

  def index
    @user = User.first
    render json: @user.dogs
  end

  def show
    @dog = Dog.find(params[:id])
    @shelter = @dog.shelter
    dog_shelter_response = {dog: @dog,
      shelter: @shelter}
    render json: dog_shelter_response
  end

  private

    def dog_details
      params.require(:dog).permit(:size, :name, :age, :photo, :description, :sex, :shelter_id)
    end
end
