class PetfinderController < ApplicationController

  def index
    # axios call to petfinder.index
    # rails server up, running localhost3000
    # call will be localhost3000
    # need react env
    pets = PetFinderAdapter.new
    @all_dogs = pets.custom_search
  end

end
