class AnswersController < ApplicationController
  def create
    answer = Answer.new(params[:answer])
    answer.answerer_id = current_user.id

    if answer.save
      render :json => answer
    else
      render :json => answer.errors, :status => 422
    end
  end

  def index
    answers = Answer.where(["question_id = ?", params[:question_id]])

    render :json => answers.includes(:answerer)
  end
end
