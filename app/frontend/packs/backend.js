import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"

Rails.start()
ActiveStorage.start()

import "controllers"

import "styles/backend"
import "styles/shared"

import "scripts/backend"
import "scripts/shared"
