Rails.application.routes.draw do

  get 'petfinder/index'
  post '/login', to: "sessions#create"

  resources :users do
    resources :dogs
  end

  resources :dogs
end
