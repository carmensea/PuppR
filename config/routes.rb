Rails.application.routes.draw do

  get 'petfinder/index'
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#delete"

  resources :users do
    resources :dogs
  end

  resources :dogs
end
