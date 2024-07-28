class ApplicationController < ActionController::API
    include DeviseTokenAuth::Concerns::SetUserByToken
    include DeviseHackFakeSession
    def health_check
        render json: { status: 'ok' }
    end
end
