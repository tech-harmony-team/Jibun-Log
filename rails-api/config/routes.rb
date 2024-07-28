Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/health_check', to: 'application#health_check'
  Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
        namespace :current do
          resources :diaries, only: [:index, :show, :create]
        end
      end
    end
  end
end