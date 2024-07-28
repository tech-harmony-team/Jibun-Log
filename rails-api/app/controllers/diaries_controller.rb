class DiariesController < ApplicationController

    before_action :authenticate_user!
    
    def index
        @diaries = current_user.diaries
        render json: @diaries
    end
    
    def show
        @diary = current_user.diaries.find(params[:id])
        render json: @diary
    end

    def create
        @diary = current_user.diaries.new(diary_params)
        if @diary.save
            render json: @diary, status :created
        else
            render json: @diary.errors, status: :unprocessabal_entity
        end
    end

    def update
    end

    def delete
    end


    def diary_params
        params.require(:diary).permit(:action_name, :action_detail, :originality, :get_something, :img_url, :start_time, :end_time, :date)
    end

end
