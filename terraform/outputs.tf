output "container_name" {
  value = terraform_data.nginx.input.container_name
}

output "application_url" {
  value = "http://localhost:${var.external_port}"
}

output "container_id" {
  value = terraform_data.nginx.id
}
