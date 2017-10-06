require 'rails_helper'

RSpec.describe DogsController, type: :controller do
let!(:user) { User.create(name: "Scott", email: "scott@scott.com", password: "password", password_confirmation: "password", id: 1)}
let!(:shelter) { Shelter.create(name: "Rainbow Bridge Dog Shelter", address: "123 Main Street", id: 1)}
let!(:dog) { Dog.create(size: "L", name: "Fido", age: "Young", photo: "http://www.google.com", description: "Coolest dog ever", sex: "M", shelter_id: shelter.id, id: 1)}
let!(:favorite) { Favorite.create!(id: 1, user_id: user.id, dog_id: dog.id)}

describe "GET #index" do
  it "responds with status code 200" do
    get :index, params: { id: user.id }
    expect(response).to have_http_status 200
  end    
end

describe "GET #show" do
  it "responds with status code 200" do
    get :show, params: { id: dog.id }
    expect(response).to have_http_status 200
  end

  it "assigns the correct dog as @dog" do
    get :show, params: { id: dog.id }
    expect(assigns(:dog)).to eq(dog)
  end   
end  
  




  # it "renders the :index view" do
  #   get :index
  #   response.should render_template :index
  # end
# end

# describe "DELETE #destroy" do 
# 	it "destroys the requested favorite" do
#     expect { delete(:destroy) }.to change(user.favorites, :count).by(-1)
#   end
# end
    
	










end
