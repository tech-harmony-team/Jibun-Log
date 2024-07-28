Rails.application.routes.draw do
  # 今回作成するAPIのURLは/api/v1/以下になるので、そのためのルーティングを設定
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end
  # Defines the root path route ("/")
  # root "articles#index"
  get '/health_check', to: 'application#health_check'
end
