#!/usr/bin/env bash
# github-pages / Jekyll 3.9 needs Ruby 3.1; Homebrew ruby 4.0 is too new.
export PATH="/opt/homebrew/opt/ruby@3.1/bin:$PATH"
bundle exec jekyll serve --livereload