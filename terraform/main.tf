terraform {
  required_version = ">= 1.4.0"
}

resource "terraform_data" "nginx" {
  input = {
    container_name = var.container_name
    external_port  = var.external_port
  }

  triggers_replace = [
    var.container_name,
    var.external_port
  ]

  provisioner "local-exec" {
    command = "docker run -d --name ${var.container_name} -p ${var.external_port}:80 nginx:1.27-alpine"
  }

  provisioner "local-exec" {
    when    = destroy
    command = "docker rm -f ${self.input.container_name}"
  }
}
