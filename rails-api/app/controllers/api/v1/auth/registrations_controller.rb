class Api::V1::Auth::RegistrationsController < ApplicationController
    before_action :configure_permitted_parameters, if: :devise_controller?
    
    def new

    end

    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation])
    end
end
