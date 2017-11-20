<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CauldronFuelUsed
 *
 * @ORM\Table(name="cauldron_fuel_used", indexes={@ORM\Index(name="IDX_EC72B1E2C16CA547", columns={"cauldron_id"}), @ORM\Index(name="IDX_EC72B1E2E52FF995", columns={"cauldron_kind_id"}), @ORM\Index(name="IDX_EC72B1E2EC8B7ADE", columns={"period_id"})})
 * @ORM\Entity
 */
class CauldronFuelUsed
{
    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime", nullable=true)
     */
    private $date;

    /**
     * @var float
     *
     * @ORM\Column(name="expend", type="float", precision=10, scale=0, nullable=true)
     */
    private $expend;

    /**
     * @var string
     *
     * @ORM\Column(name="comment", type="string", length=255, nullable=true)
     */
    private $comment;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="cauldron_fuel_used_id_seq", allocationSize=1, initialValue=1)
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
     *   @ORM\JoinColumn(name="cauldron_kind_id", referencedColumnName="id")
     * })
     */
    private $cauldronKind;

    /**
     * @var \AppBundle\Entity\Period
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Period")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="period_id", referencedColumnName="id")
     * })
     */
    private $period;


}

