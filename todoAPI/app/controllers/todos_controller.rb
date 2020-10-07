# frozen_string_literal: true

class TodosController < ApplicationController
  before_action :set_todo, only: %i[show update destroy]

  # GET /todos
  def index
    @todos = Todo.all

    render json: @todos.to_json(only: %i[id title description completed date])
  end

  # GET /todos/1
  def show
    render json: @todos.to_json(only: %i[id title description completed date])
  end

  # POST /todos
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo.to_json(only: %i[id title description completed date]), status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  def update
    if @todo.update(todo_params)
      render json: @todo.to_json(only: %i[id title description completed date])
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  def destroy
    @todo.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_todo
    @todo = Todo.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def todo_params
    params.require(:todo).permit(:title, :description, :completed, :date)
  end
end
