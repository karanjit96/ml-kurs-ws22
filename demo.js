//mario kart python?
import pygame

# --- constants  ---  # PEP8: all constants directly after imports

SCREEN_WIDTH  = 640
SCREEN_HEIGHT = 480
FPS = 60

# --- main ---  # PEP8: `lower_case_names` for variables

pygame.init()

window = pygame.display.set_mode ((SCREEN_WIDTH, SCREEN_HEIGHT))

world_image = pygame.image.load('World 1-1.png').convert()
world_image = pygame.transform.smoothscale(world_image, (8750,1400))

world_rect = world_image.get_rect()

area = pygame.Rect(0, 300, SCREEN_WIDTH, SCREEN_HEIGHT)

direction = 'right'

# - mainloop -

clock = pygame.time.Clock()

run = True

while run:
    
    for event in pygame.event.get ():
        if event.type == pygame.QUIT:
            run = False

    if direction == 'right':
        # move right
        area.x += 2
        # change direction
        if area.right > world_rect.right:
            area.right = world_rect.right
            direction = 'left'
    else:
        # move left
        area.x -= 2
        # change direction
        if area.left < world_rect.left:
            area.left = world_rect.left
            direction = 'right'
        
    #window.fill((0, 0, 0))
    
    window.blit(world_image, (0,0), area=area)
    
    pygame.display.flip()
    
    clock.tick(FPS)  # keep speed 60 FPS (Frames Per Second)
        
# - end -

pygame.quit()


import pygame

# --- constants  ---

SCREEN_WIDTH  = 640
SCREEN_HEIGHT = 480
FPS = 60

# --- main ---  # PEP8: `lower_case_names` for variables

pygame.init()

window = pygame.display.set_mode ((SCREEN_WIDTH, SCREEN_HEIGHT))
window_rect = window.get_rect()

world_image = pygame.image.load('World 1-1.png').convert()
world_image = pygame.transform.smoothscale(world_image, (8750,1400))
world_rect = world_image.get_rect()

player_image = pygame.Surface((40, 40))
player_image.fill((255, 0, 0)) # red
player_rect = player_image.get_rect(centerx=window_rect.centerx, centery=window_rect.centery+300 )

area = pygame.Rect(0, 300, SCREEN_WIDTH, SCREEN_HEIGHT)
direction = 'right'

buffer = pygame.Surface(world_rect.size)

# - mainloop -

clock = pygame.time.Clock()

run = True
while run:
    
    for event in pygame.event.get ():
        if event.type == pygame.QUIT:
            run = False

    if direction == 'right':
        # move right
        area.x += 5
        player_rect.x += 5
        # change direction
        if area.right > world_rect.right:
            area.x -= 5
            player_rect.x -= 5
            #area.right = world_rect.right
            direction = 'left'
    else:
        # move left
        area.x -= 5
        player_rect.x -= 5
        # change direction
        if area.left < world_rect.left:
            area.x += 5
            player_rect.x += 5
            #area.left = world_rect.left
            direction = 'right'

    #player_rect.center = area.center

    buffer.blit(world_image, (0,0))
    buffer.blit(player_image, player_rect)
    
    # ---
    
    #window.fill((0, 0, 0))
    
    window.blit(buffer, (0,0), area=area)
    
    pygame.display.flip()
    
    clock.tick(FPS)  # keep speed 60 FPS (Frames Per Second)
        
# - end -

pygame.quit()


