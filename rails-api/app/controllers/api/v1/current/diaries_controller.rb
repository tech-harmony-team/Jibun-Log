class Api::V1::Current::DiariesController < ApplicationController

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
          render json: @diary, status: :created
      else
          render json: @diary.errors, status: :unprocessabal_entity
      end
  end

  def update
      @diary = current_user.diaries.find(params[:id])
      if @diary.update(diary_params)
          render json: @diary, status: :ok
      else
          render json: @diary.errors, status: :unprocessable_entity
      end
  end

  def delete
      @diary = current_user.diaries.find(params[:id])
      if @diary.destroy
        render json: { message: '日記を削除しました' }, status: :ok
      else
        render json: { error: '削除に失敗しました' }, status: :unprocessable_entity
      end
  end

  def diary_params
      params.require(:diary).permit(:action_name, :action_detail, :originality, :get_something, :img_url, :start_time, :end_time, :date, :question_one, :question_two,:answer_one,:answer_two, :is_best_diary)
  end
end
