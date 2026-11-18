variable "container_name" {
  description = "Name of the Nginx container"
  type        = string
  default     = "lab3-nginx-powershell"
}

variable "external_port" {
  description = "Host port for the Nginx web server"
  type        = number
  default     = 8080
}
