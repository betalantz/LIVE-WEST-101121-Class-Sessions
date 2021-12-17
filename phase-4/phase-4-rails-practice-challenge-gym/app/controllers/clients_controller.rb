class ClientsController < ApplicationController

    before_action :find_client, only: [:show, :update]

    def show
        render json: @client, serializer: TotalMembershipsSerializer
    end

    def update

    end

    private

    def find_client
        @client = Client.find(params[:id])
    end
end
