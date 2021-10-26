class WelcomeController < ApplicationController
  def index
    Rails.logger.debug "hello"
  end
end
