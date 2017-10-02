class PetfinderController < ApplicationController

  def index
    pets = PetFinderAdapter.new
    render json: pets.custom_search(params)
  end

  # need to save dog from carousel
  def favorites
    @user = User.first

  end

  def new
  end

  def create
    @dog = Dog.new(params[dog])
    if @dog.save
      p "This is save #{@dog}"
    else
      p @dog
    end

  end
end
