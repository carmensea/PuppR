Rails.application.routes.draw do

  get 'petfinder/index'
  post '/login', to: "sessions#create"

  resources :dogs

  resources :users do
    resources :dogs
  end

 
end
