Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/health_check', to: 'application#health_check'
  Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
        mount_devise_token_auth_for 'User', at: 'auth'
        namespace :current do
          resources :diaries, only: [:index, :show, :create, :update, :delete]
        end
      end
    end
  end
end