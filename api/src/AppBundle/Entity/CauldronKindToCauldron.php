<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CauldronKindToCauldron
 *
 * @ORM\Table(name="cauldron_kind_to_cauldron", indexes={@ORM\Index(name="IDX_16EC220CC16CA547", columns={"cauldron_id"}), @ORM\Index(name="IDX_16EC220C30602CA9", columns={"kind_id"})})
 * @ORM\Entity
 */
class CauldronKindToCauldron
{
    /**
     * @var integer
     *
     * @ORM\Column(name="deleted", type="integer", nullable=true)
     */
    private $deleted;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="cauldron_kind_to_cauldron_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\Cauldron
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Cauldron")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="cauldron_id", referencedColumnName="id")
     * })
     */
    private $cauldron;

    /**
     * @var \AppBundle\Entity\CauldronKind
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\CauldronKind")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="kind_id", referencedColumnName="id")
     * })
     */
    private $kind;


}

