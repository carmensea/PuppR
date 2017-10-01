Rails.application.routes.draw do

  get 'petfinder/index'

  resources :users do
    resources :dogs
  end

  resources :dogs
end
