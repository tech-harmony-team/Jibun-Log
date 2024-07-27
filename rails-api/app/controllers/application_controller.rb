class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
    def health_check
        render json: { status: 'ok' }
    end
end
