require 'test_helper'

class PetfinderControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get petfinder_index_url
    assert_response :success
  end

end
