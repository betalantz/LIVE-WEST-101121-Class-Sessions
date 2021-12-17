Rails.application.routes.draw do
  resources :signups, only: :create
  resources :campers, except: [:destroy, :update]
  resources :activities, only: [:index, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
