class PetfinderController < ApplicationController

  def index
    pets = PetFinderAdapter.new
    render json: pets.custom_search(params)
  end

end
