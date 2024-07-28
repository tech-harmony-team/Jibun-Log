class DiariesController < ApplicationController
    def index
        @diaries = Diary.all
        render json: @diaries
      end
    
    def show
    @diary = Diary.find(params[:id])
        render json: @diary
      end

end
