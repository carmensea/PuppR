Rails.application.routes.draw do
  root 'petfinder#index'

  get 'petfinder/index'
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#delete"

  resources :dogs

  resources :users do
    resources :dogs
  end

 
end
