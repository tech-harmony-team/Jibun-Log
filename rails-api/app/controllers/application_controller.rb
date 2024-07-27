class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
        
    def health_check
        render json: { status: 'ok' }
    end

    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation])
    end
end
