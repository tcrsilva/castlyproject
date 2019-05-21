require 'test_helper'

class ServicosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get servicos_index_url
    assert_response :success
  end

end
