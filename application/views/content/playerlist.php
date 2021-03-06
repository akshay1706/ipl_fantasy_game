<div class="row">
    <div class="small-12 large-12 columns center">  
        <table class="small-12 large-12">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Skill</th>
                    <th>Price</th>
                </tr>
            </thead>
            <?php if (isset($all_players) && count($all_players)) { ?>
                <?php foreach ($all_players as $player) { ?>
                    <tr>
                        <td>
                            <a class="<?php echo (isset($_SESSION['selected']) && in_array($player->id, $_SESSION['selected'])) ? "pick disabled" : "pick"; ?>" player_id="<?php echo $player->id; ?>"><?php echo $player->name; ?></a>
                        </td>
                        <td><?php echo getSkill($player->skill); ?></td>
                        <td><?php echo '$' . $player->price . "m"; ?></td>
                    </tr>
                <?php } ?>
            <?php } else { ?>
                <tr>
                    <td colspan="6">
                        Nothing To Display
                    </td>
                </tr>
            <?php } ?>

        </table>
        <div id="links">
            <p id="page_link"><?php echo $paging; ?></p>
        </div>
    </div>
</div>