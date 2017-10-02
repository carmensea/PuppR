class DogsController < ApplicationController
  def new
  end

  def create
    @dog = Dog.new(dog_details)
    if @dog.save
      p "This is save #{@dog}"
    else
      p @dog
    end
  end

  def index
    @user = User.first

  end

  private

    def dog_details
      params.require(:dog).permit(:size, :name, :age, :photo, :description, :sex, :shelter_id)
    end
end
