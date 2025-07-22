# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set theme
ZSH_THEME="powerlevel10k/powerlevel10k"

# Enable plugins
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh

# User configuration
export EDITOR='nano'

# Aliases
alias ll='ls -lah'
alias gs='git status'
alias gp='git pull'
alias gc='git commit'
alias ..='cd ..'
alias ...='cd ../..'

# zoxide (better cd)
eval "$(zoxide init zsh)"

# Enable Powerlevel10k instant prompt (faster shell startup)
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
